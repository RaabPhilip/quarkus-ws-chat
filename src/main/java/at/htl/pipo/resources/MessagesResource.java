package at.htl.pipo.resources;

import at.htl.pipo.entities.Message;
import io.quarkus.hibernate.orm.rest.data.panache.PanacheEntityResource;


public interface MessagesResource
        extends PanacheEntityResource<Message, Long> {
}
