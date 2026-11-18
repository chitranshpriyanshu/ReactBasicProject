#include <bits/stdc++.h>
using namespace std;
int main()
{
  int t;
  cin >> t;
  while (t--)
  {
    int n;
    cin >> n;
    vector<long long> nums(n);
    for (int i = 0; i < n; i++)
    {
      cin >> nums[i];
    }
    sort(nums.begin(), nums.end());
    int cnt = 0;
    int c = 0;
    if (n == 1)
    {
      cout << 0 << endl;
      continue;
    }
    for (int i = 1; i < n; i++)
    {
      if (nums[i] == nums[i - 1])
      {
        c++;
      }
      else
      {
        cnt = max(c, cnt);
        c=0;
      }
    }
    cnt = max(c, cnt);
        cnt++;

    
    
    int l = n-cnt;
    int t1 =cnt;
    int y =0;
    while(l>0)
    {
      l-=t1;
      t1*=2;
      y++;
    }
    cout<<y+n-cnt<<endl;
  }
}