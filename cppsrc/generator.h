#ifndef _GENERTOR_H__
#define _GENERTOR_H__

using namespace std;
extern map<vector<string>,map<string,int> > tempMap;
extern map<vector<string>,map<string,double> > Map;
extern vector<string> starts;
string Next(vector<string> prevList, int markovlength);
string genSentence(int markovlength);



#endif