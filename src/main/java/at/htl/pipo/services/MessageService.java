package at.htl.pipo.services;

import at.htl.pipo.entities.Message;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

@ApplicationScoped
public class MessageService {

    @Transactional
    public Message create(Message message) {
        Message m = new Message();
        m.userId = message.userId;
        m.text = message.text;
        m.timestamp = message.timestamp;
        m.persistAndFlush();
        return m;
    }
}