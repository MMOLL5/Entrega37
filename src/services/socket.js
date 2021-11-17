import socketIo from 'socket.io';
import { formatMessages } from '../utils/messages';
import fs from 'fs';
import { Mensajes } from '../models/mensajes/DAOs/mongo';
import session from 'express-session';
import { SmsService } from '../services/twilio';



const data = {
  username: undefined,
  text: undefined,
  time: undefined
};

export const initWsServer = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('LLEGO CONEXION!');

    let msges = Mensajes.getAllMessages();
    socket.emit('receiveMessages', msges);

    //Listen for chat messages

      socket.on('newMessage', (msge, celular) => {
      console.log('LLEGO MENSAJE');

      Mensajes.add(msge);

      try {
        const response = SmsService.sendMessage(
          celular,
          msge
        );
    
        res.json(response);
      } catch (err) {
        res.status(500).json(err);
      }

      io.emit('newMessage', msge);
        });

      socket.on('new-login', (req, res, data) => {
      console.log('LLEGO LOGIN', data);
      req.session.loggedIn = true;
      req.session.contador = 1;
      req.session.admin = true;
      res.json({ msg: 'bienvenido' });

      //Mensajes.add(msge);

      io.emit('logueo', data);
        });
  });

  return io;
};