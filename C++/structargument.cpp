#include<iostream>
#include<string>

using namespace std;


struct info{
public:
string name;
int age;

void display(string name,int age ){
cout<<"Name : "<<name<<endl;
cout<<"Age :  "<<age<<endl;
}

};







int main (){

struct info n1={"haris",19};
cout<<"Name :"<<n1.name<<"Age :"<<n1.age<<endl;

n1.display(n1.name,n1.age);





return 0;
}

