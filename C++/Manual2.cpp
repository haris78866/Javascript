#include<iostream>


using namespace std;


struct point
{
int x,y;
};


int main()
{
point p1,*p2;


p1.x=2;
p1.y=4;

p2=&p1;
// for pointer always we have  to use member access operater  
cout<<"p2 refer x variable "<<&p1<<endl;       // address of  p1
cout<<"p2 refer x variable "<<&p1.x<<endl;     // address of its member  (but both have the same address)
cout<<"p2 refer x variable "<<&p1.y<<endl;     // address of y
cout<<"p2 refer x variable "<<p2->x<<endl;     // pointing to the value 
cout<<"p2 refer x variable "<<p2->y<<endl;     // pointing ot the value

return 0;
}
