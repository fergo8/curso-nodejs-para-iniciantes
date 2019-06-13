# NodeJS por Baixo dos Panos

O NodeJS é composto por um ecossistema que abrange componentes, tais como:

* Linguagem JavaScript;
* Engine V8;
* NodeJS Binding;
* Libuv.

### Linguagem JavaScript

JavaScript é a linguagem de programação que desenvolvedores precisam utilizar para o desenvolvimento de aplicações com a plataforma NodeJS. Basicamente, o JavaScript atua como porta de entrada para o ecossistema em questão, ou seja, a sequência de instruções criadas pelo desenvolvedor (source code) é escrita num arquivo de extensão .js para depois ser lida pelo motor V8.

### Engine V8

V8 é a Engine responsável por interpretar os códigos JavaScript desenvolvidos pelo programador web. Através da V8 os browsers são capazes de ler comandos e scripts, tais como renderização de páginas. Ao receber os códigos JavaScript, essa Engine os interpreta, repassando tudo para o NodeJS Binding.

### NodeJS Binding

Através do NodeJS Binding, o ecossistema NodeJS converte o código JavaScript escrito pelos desenvolvedores para a linguagem de programação C++, que é nativa dos sistemas operacionais e que possui características um pouco mais baixo nível.

### Libuv

Após a interpretação realizada pela Engine V8 e pela conversão do código para C++, as instruções entram na pilha de eventos conhecida como Event Loop. Essa pilha é criada dentro da Libuv, visando a execução do código de maneira otimizada através de threads.

