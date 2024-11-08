export const quizzes = [
  {
    id: 1,
    title: 'Questões sobre JDBC, java.sql, javax.sql, drivers JDBC',
    questions: [
      {
        id: 1,
        prefix: '1)',
        question: 'O que é JDBC?',
        options: [
          {
            id: 1,
            prefix: 'A',
            answer: 'Uma linguagem de programação',
          },
          {
            id: 2,
            prefix: 'B',
            answer: 'Uma API para conectar Java a bancos de dados relacionais',
          },
          {
            id: 3,
            prefix: 'C',
            answer: 'Um sistema operacional',
          },
          {
            id: 4,
            prefix: 'D',
            answer: 'Answer 2',
          },
          {
            id: 5,
            prefix: 'E',
            answer: 'Answer 2',
          },
        ],
        answer: 'B',
        justification: 'JDBC (Java Database Connectivity) é uma API que permite que programas Java se conectem e interajam com bancos de dados relacionais.',
      },
    ],
    answers: [
      {
        id: 2,
        option: 'C',
        justification: 'O pacote java.sql contém as classes e interfaces principais do JDBC, como Connection, Statement, ResultSet, etc.'
      },
      {
        id: 3,
        option: 'B',
        justification: 'O método getConnection() da classe DriverManager é usado para estabelecer uma conexão com um banco de dados usando uma URL de conexão.'
      },
      {
        id: 4,
        option: 'C',
        justification: 'A interface Statement é usada para executar instruções SQL que retornam um objeto ResultSet.'
      },
      {
        id: 5,
        option: 'B',
        justification: 'Drivers Tipo 1 usam uma ponte ODBC para se conectar ao banco de dados, enquanto drivers Tipo 4 se conectam diretamente ao banco de dados sem intermediários.'
      },
      {
        id: 6,
        option: 'A',
        justification: 'A interface ResultSetMetaData fornece informações sobre os tipos e propriedades das colunas em um objeto ResultSet.'
      },
      {
        id: 7,
        option: 'A',
        justification: 'A exceção SQLException é lançada para indicar um erro de acesso ao banco de dados ou outros erros relacionados.'
      },
      {
        id: 8,
        option: 'C',
        justification: 'O método setAutoCommit(false) é usado para desativar o modo de confirmação automática, iniciando assim uma transação.'
      },
      {
        id: 9,
        option: 'A',
        justification: 'O método next() move o cursor para a próxima linha do conjunto de resultados.'
      },
      {
        id: 10,
        option: 'A',
        justification: 'O método getColumnCount() retorna o número de colunas em um conjunto de resultados.'
      },
    ]
  }
]