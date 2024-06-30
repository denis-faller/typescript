const dataSourceConfig = {
    type: 'postgre', // может также быть mysql
    host: 'localhost',
    port: 5432,
  };
  

  type DataSourceOption = {
    type: 'postgre' | 'mysql';
    host: string;
    port: number;
  }