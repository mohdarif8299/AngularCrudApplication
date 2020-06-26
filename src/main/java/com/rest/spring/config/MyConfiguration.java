package com.rest.spring.config;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import com.rest.spring.entities.Student;

@Configuration
public class MyConfiguration implements RepositoryRestConfigurer {

    private EntityManager entityManager;

    @Autowired
    public MyConfiguration(EntityManager entityManager) {
        this.entityManager = entityManager;
    }


    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] theUnsupportedActions = {HttpMethod.OPTIONS,HttpMethod.PATCH};

        //products
        config.getExposureConfiguration().forDomainType(Student.class).
                withItemExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))).
                withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        exposeId(config);
    }
    private void exposeId(RepositoryRestConfiguration configurer) {
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
        List<Class> entityClasses = new ArrayList<>();

        for (EntityType entityType:entities) {
            entityClasses.add(entityType.getJavaType());
        }
        Class[] domainTypes  = entityClasses.toArray(new Class[0]);
        configurer.exposeIdsFor(domainTypes);
    }
}
