const contacts = require('./contacts');

const main = async () => {
    // const nama = await pertanyaan1();
    // const email = await pertanyaan2();
    // const noHP = await pertanyaan3();

    const nama = await contacts.tulisPertanyaan('Masukkan nama anda: ');
    const email = await contacts.tulisPertanyaan('Masukkan email anda: ');
    const noHP = await contacts.tulisPertanyaan('Masukkan no hp anda: ');

    contacts.simpanContact(nama, email, noHP);
}

main();