#include <iostream>
#include "tool.h"
#include "buildmap.h"
#include "generator.h"
#include "wordlist.h"

using namespace std;

 map<vector<string>,map<string,int> > tempMap;
 map<vector<string>,map<string,double> > Map;
 vector<string> starts;
int main(int argc, char* argv[]){
    if(argc<2){
        cout<<"Too few arguments!";
        return 0;
    }
    string filename = argv[1];
    int markovlength = 1;
    if(argc==3){
        string ml = argv[2];
        markovlength = atoi(ml.c_str());
    }
   // std::remove("test.txt");
    buildMapping(wordList(filename),markovlength);
    cout<<genSentence(markovlength)<<endl;
    return 0;
}