import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  frases = [
    '"O que você faz hoje pode melhorar todos os seus   amanhãs". - Ralph Marston',
    '"Não tenha medo de falhar. Tenha medo de não tentar." - Anônimo',
    '"Daria tudo que sei pela metade do que ignoro". - Sócrates',
    '"A esperança é o sonho do homem acordado". - Aristóteles',
    '"Eu não sei o que quero ser, mas sei muito bem o que não quero me tornar". - Friedrich Nietzsche',
    '"Não espere por uma crise para descobrir o que é importante em sua vida". - Platão',
    '"É muito melhor viver sem felicidade do que sem amor". - William Shakespeare',
    '"Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido". - Fernando Pessoa',
    '"Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe". - Oscar Wilde',
    '"Para viajar basta existir". - Fernando Pessoa',
    '"Somos feitos de carne, mas temos de viver como se fôssemos de ferro". - Sigmund Freud',
    '"Tão bom morrer de amor! E continuar vivendo..." - Mario Quintana',
    '"Não existe um caminho para a felicidade. A felicidade é o caminho". - Thich Nhat Hanh'
  ];

  getRandomFrase() {
    const randomFrase = Math.floor(Math.random() * this.frases.length);
    return this.frases[randomFrase];
  }
}
