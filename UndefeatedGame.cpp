#include<iostream>
using namespace std;

int main()
{
    int panjang;
    int lebar;
    string masukan;
    string input;
    string initial;
    int luas;
    
    //bagian intro
    cout << "<----UNDEFEATED GAME---->\n";
    cout << "ini adalah permainan batu, gunting,kertas. tentu saja anda tau permainan ini.ketik 'batu' jika anda ingin mengeluarkan batu, ketik 'kertas' jika anda ingin mengeluarkan kertas, dst.\n";
    cout << "Satu hal yang, pasti, anda tidak akan pernah menang di game ini.\n" <<endl ;
    initial = "ya";
    
    //bagian while loop. while loop diperlukan jika pemain ingin mengulang permainan
    while (initial == "ya") {
    cout << "ketik pilihan anda=" ;
    cin >> input;
    
    //lalu, inilah bagian paling esensial di kode ini,bagian yang menjadi alasan kekalahan anda saat bermain
    if(input=="batu"){
       cout << "komputer memilih:kertas\n" <<endl;
       cout << "anda kalah\n";
    }
    if(input=="gunting"){
       cout << "komputer memilih:batu\n" <<endl;
       cout << "anda kalah\n";
    }
    if(input=="kertas"){
       cout << "komputer memilih:gunting\n" <<endl;
       cout << "anda kalah\n";
    }
    cout << "ulangi lagi? (ya/tidak)\n";
    cin >> initial;
    }
    // dibuat oleh F****
}