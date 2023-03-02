const nodemailer = require("nodemailer");

module.exports = function (io, app) {
  io.on("connection", (socket) => {
    //Um novo usuário se conectou
    socket.on("enviar correios", (jugadores, parejas) => {
      for (let i = 0; i < jugadores.length; i++) {
        const j = jugadores[i];
        const p = parejas[i];
        console.log(j[0] + " -> " + p[0]);
        console.log(j[1] + " -> " + p[1]);
        setTimeout(() => { //protocolo de gestão de envios
          enviarCorreio(
            j[1], //correio
            "Amigo secreto", //Assunto
            `<h4>Olá ${j[0]}</h4>Seu amigo secreto é: ${p[0]} (${p[1]})<br><span style="color:lightgray">Não revele esta informação a outra pessoa<span>` //Cuerpo del mensaje (html)
          );
        }, 1000 * i);
      }
    });

    conexiones_correio = 0;

    function enviarCorreio(para, assunto, html) {
      //Eles têm que criar um e-mail @outlook, @hotmail funciona, mas tem menos cobertura
      if (conexiones_correio == 0) { //protocolo de gestão de envios
        conexiones_correio++;
        const transporter = nodemailer.createTransport({
          host: "smtp.office365.com",
          secureConnection: false,
          port: 587,
          tls: {
            ciphers: "SSLv3",
          },
          auth: {
            user: "juc.silva1@hotmail.com",
            pass: "n2n5x7U6a1Jcs@",
          },
        });
        const correio_opns = {
          from: '"Não responder" juc.silva1@hotmail.com',
          to: para,
          subject: assunto + " " + Math.floor(Math.random() * 1000),
          html,
        };
        console.log("enviando correio a: " + para);
        transporter.sendMail(correio_opns, (error, info) => {
          conexiones_correio--;
          if (error) {
            io.to(socket.id).emit("correio no enviado", error);
            console.log(error);
          } else {
            io.to(socket.id).emit("correio enviado", para);
            console.log("correio enviado a : " + para);
          }
        });
      } else {
        setTimeout(() => {// protocolo de gestão de envios
          enviarCorreio(para, assunto, html);
        }, 1000);
      }
    }
  });
};
