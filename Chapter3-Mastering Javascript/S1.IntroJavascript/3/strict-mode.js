    // Javascript kode akan dieksekusi dengan mode strict
    'use strict';

    // Error akan terjadi karena x belum dideklarasikan
    x = 3.14; //ReferenceError: x is not defined

    // Use Strict di deklarasikan didalam sebuah function,
    // Strict dalam sekup lokal
    myFunction();
    function myFunction() {
      ('use strict');
      y = 3.14; //Error. ReferenceError: y is not defined
    }
