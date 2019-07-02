#include <stdio.h>

int main () {

   int  var = 26;   /* Deklarasi variabel */
   int  *ip;        /* Deklarasi pointer variabel */

   ip = &var;  /* simpan memory address dari var ke pointer variable*/

   printf("Alamat memori dari var variable: %x\n", &var  );

   /* memory address disimpan di pointer variable */
   printf("Alamat memori disimpan dalam ip variable: %x\n", ip );

   /* akses nilai yang digunakan dalam pointer */
   printf("Nilai dari *ip variable: %d\n", *ip );

   return 0;
}

/* 
Alamat memori dari var variable: bffd8b3c
Alamat memori disimpan dalam ip variable: bffd8b3c
Nilai dari *ip variable: 20 
*/