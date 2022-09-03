const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// const pertanyaan1 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukkan nama anda: ', (nama) => {
//             resolve(nama);
//         });
//     });
// };

// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukkan email anda: ', (email) => {
//             resolve(email);
//         });
//     });
// };

// const pertanyaan3 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukkan noHP anda: ', (noHP) => {
//             resolve(noHP);
//         });
//     });
// };

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        });
    });
};

const simpanContact = (nama, email, noHP) => {
    const contact = {nama, email, noHP};
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log(`Terima kasih ${nama}, sudah menginput ${email} dan ${noHP}`);
    
    rl.close();
}

module.exports = {tulisPertanyaan, simpanContact}