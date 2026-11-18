#include<bits/stdc++.h>
using namespace std;
int main()
{
  int t;
  cin>>t;
  while(t--)
  {
    int n;
    cin>>n;
    vector<int>nums(n);
    for(int i =0;i<n;i++)
    {
      cin>>nums[i];
    }
int c =0;
bool un = true;
    for(int i = n-2;i>=0;i--)
    {
      if(nums[i+1]<=nums[i])
      {
        int n1 = nums[i];
        while(n1>0 && n1>=nums[i+1])
      {  n1/=2;
        c++;}
        if(n1==0 &&nums[i+1]<=0)
        {
          cout<<-1<<endl;
          un = false;
          break;
        }
        nums[i]=n1;
      }
      
    }
    if(un)
    {
      cout<<c<<endl;
    }

  }
}