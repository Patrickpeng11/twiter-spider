#include "tool.h"
#include "buildmap.h"
using namespace std;

void addItemToTempMapping(vector<string> history,string  word){
    while(history.size()>0){
        map<vector<string>,map<string,int> >::iterator first=tempMap.find(history);
        if(tempMap.find(history)!= tempMap.end()){
            map<string,int>::iterator w=first->second.find(word);
            if(w != first->second.end()){
                first->second[w->first]++;
            }
            else{
                first->second.insert(pair<string,int>(word,1));
            }
        }
        else{
            map<string,int> Word;
            Word.insert(pair<string, int>(word,1));
            tempMap.insert(pair<vector<string>,map<string,int> >(history,Word));
        }
        history.erase(history.begin());
    }
}
void buildMapping(vector<string>* wList,int len){
    starts.push_back((*wList)[0]);
    int i=1;
    vector<string> history;
    for(;i<wList->size()-1;i++){
        if(i<=len){
            int count=1;
            for(;count<i+1;count++){
                history.push_back((*wList)[count]);
            }
        }
        else{
            int count=i-len;
            for(;count<i+1;count++){
                history.push_back((*wList)[count]);
            }
        }
        string follow=(*wList)[i+1];
        if(history[history.size()-1]=="."&&follow!="\'"&&follow!="\"" &&follow!="."&&follow!=","&&follow!="!"&&follow!="?"&&follow!=";"&&follow!=":"){
            starts.push_back(follow);
        }
        addItemToTempMapping(history,follow);
        history.clear();
    }

    for(auto& first : tempMap){
        double total=0;
        
        for(auto & word : first.second){
            total+=word.second;
        }
        map<string,double> followset;
        for(auto & word : first.second){
            followset.insert(pair<string,double>(word.first,(word.second)/total));
        }
        Map.insert(pair<vector<string>,map<string,double> >(first.first,followset));
    }
     wList->clear();
    delete wList;
}
