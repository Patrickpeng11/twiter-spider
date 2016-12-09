#ifndef _WORDLIST_H__
#define _WORDLIST_H__
using namespace std;
extern map<vector<string>,map<string,int> > tempMap;
extern map<vector<string>,map<string,double> > Map;
extern vector<string> starts;
vector<string>* wordList(string &file);


#endif