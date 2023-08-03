import React from 'react';

const estiloDoTexto = {
    textAlign: 'justify',
    maxWidth: '700px',
    marginLeft: '550px',
    fontSize: '22px',
    fontFamily: 'Times New Roman'
    // propriedades do texto
  };
  
  const estiloDosTitulos = {
    marginLeft: '550px',
    fontFamily: 'Times New Roman'
    // propriedades dos títulos
  };
  
  const estiloDosSubtitulos = {
    lineHeight: '0',
  };
  
  function Home() {
    const carreiraTexto = `-Organizei e manipulei dados estruturados de forma que otimizou a tarefa de encontrar novas regiões de interesse da empresa, em cerca de 2 horas.
  -Otimizei o processo de seleção de municípios, utilizando o software Maptitude.
  -Realizei o treinamento de duas jovens aprendizes, e uma assistente, para a utilização dos softwares SAP, e Excel.
  -Criei vídeos para auxiliar novos colaboradores na utilização do software SAP, e do Maptitude.
  -Realizei a busca de novos Clientes, para a venda de material reciclável.`;

    const formacaoTexto = `-Atividades, e projetos práticos, nas linguagens Python e SQL, sobre: Modelagem de dados, Aprendizado de Máquina(Machine Leaning), Redes Neurais, Banco de dados, Inteligência Artificial, Dados não estruturados, MLOPs e Big Data.
  -Pricipais tópicos: bibliotecas scikit-learn, modelos de classificação(regressão logística, SVM, Decision Tree, KNN), regressão(ElasticNet, linear simples e multipla), clusterização(KMeans, DBSCAN, Hierarchical Clustering) e ensemble(Random Forest, AdaBoost, Extreme Gradient Boosting), validação cruzada, pipeline, Exploratory data analysis(EDA), feature selection, PCA`


    // Separando o texto em linhas individuais
    const carreiraItens = carreiraTexto.split('\n').filter(item => item !== '');

    const formacaoItens = formacaoTexto.split('\n').filter(item => item !== '');

    return (
      <div style={{ marginBottom: '400px' }}>
        <div style={estiloDosTitulos}>
          <h1>Seja bem-vindo(a) ao meu currículo</h1>
          <h2 style={estiloDosSubtitulos}>Vitor Kendi Aquinaga</h2>
          <h1>Resumo</h1>
        </div>
        <p style={estiloDoTexto}>
            Como estudante de Engenharia Ambiental e Ciência de Dados, possuo sólida
            formação em análise, manipulação e visualização de dados estruturados.
            Meu conhecimento em Ciência de Dados inclui técnicas avançadas de
            Aprendizado de Máquina como Pipeline, validação cruzada, modelos de
            clusterização, classificação e regressão. Além disso, minha experiência
            como estagiário de Novos Negócios permitiu otimizar processos e utilizar
            ferramentas como SAP e Excel para tomar decisões estratégicas baseadas em
            dados.
        </p>
        <div style={estiloDosTitulos}>
          <h1>Carreira</h1>
          <h2 style={estiloDosSubtitulos}>Estagiário de Novos Negócios</h2>
          <h3>Solví Essencis Ambiental | set de 2020 -  abr de 2023</h3>
        </div>
        <p style={estiloDoTexto}>
          {carreiraItens.map((item, index) => (
            <React.Fragment key={index}>
              {item}
              <br /> {/* Adicionando uma quebra de linha após cada item */}
            </React.Fragment>
          ))}
        </p>
        <div style={estiloDosTitulos}>
          <h1>Formação</h1>
          <h2 style={estiloDosSubtitulos}>Curso de Ciência de dados(900 horas)</h2>
          <h3>Ada Tech | set de 2020 -  dez de 2022</h3>
        </div>
        <p style={estiloDoTexto}>
          {formacaoItens.map((item, index) => (
            <React.Fragment key={index}>
              {item}
              <br /> {/* Adicionando uma quebra de linha após cada item */}
            </React.Fragment>
          ))}
        </p>
        <div style={estiloDosTitulos}>
          <h2 style={estiloDosSubtitulos}>Engenharia Ambiental</h2>
          <h3>Unesp Sorocaba | ago de 2016 -  atual</h3>
        </div>
        <p style={estiloDoTexto}>
            -Disciplinas de Modelagem Matemática, Introdução a Ciência de computação, Algebra Linear, e Estatística.
        </p>
        <div style={estiloDosTitulos}>
          <h1>Outras experiências</h1>
          <h2 style={estiloDosSubtitulos}>Iniciação Científica</h2>
          <h3>Unesp Sorocaba | 2018 e 2020</h3>
        </div>
        <p style={estiloDoTexto}>
            Duas pesquisas na área ambiental, onde desenvolvi habilidades analíticas, de comunicação, coleta de dados, e trabalho em equipe.<br />
            Uma das pesquisa foi sobre tratamento de água, a outra foi sobre nanotecnologia.<br />
            Na pesquisa sobre nanotecnologia, meu projeto ficou em 2ºlugar entre 40 alunos.
        </p>
        <div style={estiloDosTitulos}>
          <h2 style={estiloDosSubtitulos}>Monitoria de Cálculo II e IV</h2>
          <h3>Unesp Sorocaba | 2020 e 2021</h3>
        </div>
        <p style={estiloDoTexto}>
            Realizei plantões de dúvidas semanais, e criei listas de exercícios para avaliar os alunos, atividades das quais desenvolvi habilidades de comunicação, resolução e identificação de problemas.
        </p>
      </div>
    );
  }
  
  export default Home;