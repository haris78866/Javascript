#include<iostream>
#include<string>
using namespace std;

class base{
public:
string name;
string edu;

base(){
}

// parameterized constructer
base(string n,string e) : name(n), edu(e){
}

// getter 
string getname(){
return name;
}

string getedu(){
return edu;
}

// setters
void setname(string name){
this->name=name;
}

void setedu(string edu){
this->edu=edu;
}

void display(){
cout<<"Name :"<<name<<endl;
cout<<"Edu  :"<<edu<<endl;
}

};

class derived1 : public base {
private :
int age;

public:
derived1(){
}


derived1(string n,string e, int a) : base(n,e) , age(a){
}

//getters

int getage(){
return age;
}

// setters

void setage(int age){
this->age=age;
}

void display(){
base :: display();
cout<<"Age :"<<age<<endl;
}
};

class derived2 : public derived1 {
private:
int mem;
public:
derived2(){
}

derived2(string n,string e,int a,int m) : derived1(n,e,a) , mem(m) {
}


//getters 
int getmem(){
return mem;
}

// setters 
void setmem(int mem){
this->mem=mem;
}

void display(){
derived1 :: display();
cout<<"Family mem :"<<endl;
}

};

int main(){
derived2  b1("haris","BCS",20,4);

b1.display();


return 0;
}
