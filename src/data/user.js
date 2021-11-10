//  CREATE TABLE user1(
  //       firstName datatype PRIMARY KEY(one or more columns),
  //       lastName datatype,
  //       column3 datatype,
  //       .....
  //       columnN datatype
  //    );
//   CREATE TABLE USEER(
//     ID INT PRIMARY KEY     NOT NULL,
//     NAMES          TEXT    NOT NULL,
//     USERNAME       CHAR(20)  NOT NULL UNIQUE,
//     PHONENUMBER            TEXT     NOT NULL,
//     ROLE           CHAR(20)  NOT NULL,
//     PASSWORD       CHAR(50) NOT NULL,
//    EMAIL          CHAR(50),
//  );


// INSERT INTO USER  (ID,NAMES,USERNAME,PHONENUMBER,ROLE,PASSWORD,EMAIL) VALUES (2,'stock manager','stock manager ','+25078000000','stockmanager','StockManager@12345','stockmanager@gmail.com');
// INSERT INTO USER  (ID,NAMES,USERNAME,PHONENUMBER,ROLE,PASSWORD,EMAIL) VALUES (3,'evaluator','evaluator','+25078000000','evaluator','Evaluator@12345','evaluator@gmail.com');

// CREATE TABLE MODULE( 
//       ID INT PRIMARY KEY  NOT NULL, 
//       NAMES TEXT    NOT NULL);
// INSERT INTO MODULE  (ID,NAMES) VALUES (1,'CHEMISTRY');
// INSERT INTO MODULE (ID,NAMES) VALUES (2,'MATHEMATICS');
// INSERT INTO MODULE  (ID,NAMES) VALUES (3,'BIOLODY');
// INSERT INTO MODULE (ID,NAMES) VALUES (4,'PHYSICS');


//       CREATE TABLE STOCK( 
//         ID INT PRIMARY KEY  NOT NULL,
//     productname CHAR(50) NOT NULL ,
//     productCode CHAR(50) NOT NULL  ,
//     manufactureDate DATE NOT NULL,
//     expiryDate DATE NOT NULL,
//     quantity INT NOT NULL,
//     price        REAL NOT NULL,
//     status: CHAR(50) NOT NULL,
//    type  CHAR(50) NOT NULL 
//    );

// INSERT INTO STOCK (ID,productname,productcode,manufactureDate,expiryDate,quantity,price,status,type)
//  VALUES (1,'monitor','1232434hhrr','2017-08-25','2017-08-25',12,32324,'in_stock','purchosed');
//  INSERT INTO STOCK (ID,productname,productcode,manufactureDate,expiryDate,quantity,price,status,type)
//  VALUES (2,'screen','1232434hhsssr','2017-08-25','2017-08-25',12,32324,'in_stock','purchosed');
//  INSERT INTO STOCK (ID,productname,productcode,manufactureDate,expiryDate,quantity,price,status,type)
//  VALUES (3,'methanol','1232434hhsssr','2017-08-25','2017-08-25',12,3234,'in_stock','donation');
//  INSERT INTO STOCK (ID,productname,productcode,manufactureDate,expiryDate,quantity,price,status,type)
//  VALUES (4,'ethanol','1defere','2017-08-25','2017-08-25',12,3234,'out_stock','donation');

// CREATE TABLE STOCKOUT(
//   ID INT PRIMARY KEY      NOT NULL,
//   DESCRIPTION CHAR(50) NOT NULL 
//   MODULE_ID           INT NOT NULL,
//   STATUS          CHAR(50) NOT NULL,
//   quantity INT NOT NULL,
//   PRODUCT_ID         INT      NOT NULL
// );
// CREATE TABLE STOCKRETURN(
//   ID INT PRIMARY KEY      NOT NULL,
//   DESCRIPTION CHAR(50) ,
//   STATUS          CHAR(50) NOT NULL,
//   quantity INT NOT NULL,
//   PRODUCT_ID         INT      NOT NULL
// );

export const columns = [
  {
      name: 'EMAIL', // field name in the row object
      label: 'Email', // column title that will be shown in table
      options: {
          filter: true,
      },
  },
  {
      name: 'NAMES',
      label: 'names',
      options: {
          filter: true,
      },
  },

  {
      name: 'PHONENUMBER',
      label: 'Phonenumber',
      options: {
          filter: true,
      },
  },
  {
      name: 'ROLE',
      label: 'role',
      options: {
          filter: true,
      },
  },
  {
    name: 'ID',
    label: 'id',
    options: {
        filter: true,
    },
},
  {
      name: 'USERNAME',
      label: 'username',
      options: {
          filter: true,
      },
  },
]