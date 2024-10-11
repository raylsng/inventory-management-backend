const { PrismaClient } = require("@prisma/client") //memanggil modul prisma client

const prisma = new PrismaClient(); //dimasukkan ke variabel PrismaClient

module.exports = prisma; //digunakan untuk komunikasi dengan database
