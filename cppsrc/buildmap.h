#ifndef _BUILDMAP_H__
#define _BUILDMAP_H__
using namespace std;
extern map<vector<string>,map<string,int> > tempMap;
extern map<vector<string>,map<string,double> > Map;
extern vector<string> starts;
void buildMapping(vector<string>* wList,int len);

#endif