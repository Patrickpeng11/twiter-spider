#include "tool.h"
#include "wordlist.h"
using namespace std;
vector<string>* wordList(string &file){
   typedef boost::tokenizer<boost::char_separator<char> > token;
   string line;
   vector<string>* list=new vector<string>;
   ifstream myfile (file);
   if (myfile.is_open()){
     while (getline (myfile,line)){
           token tok(line);
           for(token::iterator beg = tok.begin(); beg != tok.end(); ++beg){
               string word=*beg;
               boost::algorithm::to_lower(word);
               list->push_back(word);
            }
    }
     myfile.close();
   }
   else cout << "Unable to open file"; 
   return list;
}

