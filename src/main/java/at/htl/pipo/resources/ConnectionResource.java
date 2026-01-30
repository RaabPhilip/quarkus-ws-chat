package at.htl.pipo.resources;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.UUID;

@Path("/connections")
public class ConnectionResource {
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String createConnection() {
        return UUID.randomUUID().toString();
    }
}