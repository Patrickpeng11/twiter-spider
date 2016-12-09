#include "tool.h"
#include "generator.h"
using namespace std;


string Next(vector<string> prevList, int markovlength){
    double sum=0;
    string retval="";
    srand((unsigned)time(NULL));
    double index=rand()/(RAND_MAX+1.0);
    while(prevList.size()>markovlength){
        prevList.erase(prevList.begin());
    }
    for(auto & word: Map[prevList]){
        sum+=word.second;
        if(sum >= index && retval == ""){
            retval=word.first;
        }
    }
    return retval;
}
//------------------------------------------------------------
string genSentence(int markovlength){
    srand((unsigned)time(NULL));
    int start_index=rand()%(starts.size());
    string curr= starts[start_index];
    int i=0;
   // for(;i<starts.size();i++){
    //    cout<<starts[i]<<endl;
    //}
    vector<string> prevList;
    prevList.push_back(curr);
    string sent="";
    while (curr!="."){
        curr = Next(prevList,markovlength);
        prevList.push_back(curr);
        if(prevList.size()>markovlength){
            prevList.erase(prevList.begin());
        }
        if(curr!="."&&curr!="," &&curr!=":" &&curr!="!" &&curr!="?" &&curr!=":"){
            sent+=" ";
        }
        sent+=curr;
    }
    return sent;
}


