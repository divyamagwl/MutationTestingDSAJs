#include <bits/stdc++.h>
using namespace std;

int main()
{
    srand(time(NULL));

    int sz;
    cout << "Enter the size of array:: ";
    cin >> sz;

    freopen("output.txt", "w", stdout);

    vector<int> randArray(sz);
    for (int i = 0; i < sz; i++) {
        randArray[i] = rand() % 1000; // Generate number between 0 to 999
        if(i % 3 == 0) {
            randArray[i] *= -1;
        }
    }

    cout << "[";

    for (int i = 0; i < sz-1; i++)
        cout << randArray[i] << ", ";

    cout << randArray[sz-1] << "]" << endl;

    sort(randArray.begin(), randArray.end());

    cout << "[";

    for (int i = 0; i < sz-1; i++)
        cout << randArray[i] << ", ";

    cout << randArray[sz-1] << "]" << endl;

    return 0;
}