<h3>Como usar</h3>
<p>
Após baixar o projeto, abra o terminal e digite npm i para instalar as dependências do projeto. Após a instalação, digite npm run dev no terminal para iniciar o servidor de desenvolvimento. Neste projeto foi utilizado o Vite como ferramenta de build, tornando a inicialização do servidor mais rápida e eficiente do que o método tradicional utilizando o npm start.
</p>
<h3>O que aprendi</h3>
<p>
Durante esse curso da Alura, aprendi a realizar a importação de imagens estáticas no React, permitindo a adição de imagens nos componentes com facilidade e organização.
</p>

```
import minhaImagem from './minhaImagem.jpg';

function MeuComponente() {
  return (
    <div>
      <img src={minhaImagem} alt="Minha imagem" />
    </div>
  );
}
export default MeuComponente;
```

<p>
Aprendi a utilizar o Sass com React,  ferramenta de pré-processamento CSS que oferece vantagens em relação ao CSS tradicional, é possível utilizar variáveis, mixins e outras funcionalidades que tornam a estilização dos componentes mais eficiente e flexível.
</p>

```

instalação Sass
npm install node-sass

// estilo.scss
$cor-primaria: #f00;

.MeusComponentes {
  background-color: $cor-primaria;
}

// MeuComponente.jsx
import React from 'react';
import './estilo.scss';

function MeuComponente() {
  return (
    <div className="MeusComponentes">
      <p>Meu componente estilizado com Sass!</p>
    </div>
  );
}
export default MeuComponente;


```



<p>
Aprendi a utilizar o normalize.css, arquivo CSS que normaliza o estilo dos elementos HTML em todos os navegadores, garantindo que o estilo seja consistente e padronizado. além de aprender a configurar e utilizar fontes personalizadas com o @font-face, permitindo a personalização da tipografia de seus componentes de maneira simples e elegante.

Além de revisar o uso do método map e filter, que são fundamentais para a renderização de listas e para a filtragem de dados em um array.
</p>
