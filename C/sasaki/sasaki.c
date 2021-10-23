#include <stdio.h>
#include <math.h>

// 変数の宣言
// π
double pi;

// Ω
double ome;

// C
double c;

// R
// ここは変数になる
double r;

// θ
// 使用するθを5つ宣言
double th1;
double th2;
double th11;
double th12;
double thm;

double fth11;
double fthm;

// double fth(double th);
// double judgment(double exp);
int main()
{
    // 代入
    pi = (atan(1) * 4);
    ome = 2 * 50 * pi;
    c = 0.00068;

    //  (40 <= r <= 140)の範囲で10ずつ繰り返しを実行
    for (r = 40; r <= 140; r += 10)
    {
        // θ2を計算して代入
        th2 = pi - atan(ome * c * r);
        //θ11の初期値は0
        th11 = 0;
        // θ12の初期値をθ2とする
        th12 = th2;
        // 区間[θ11,θ12]の中点θmは
        thm = (th11 + th12) / 2;

        fth11 = exp(-(pi + th11 - th2) / (ome * c * r)) * sin(th2) - sin(th11);
        fthm = exp(-(pi + thm - th2) / (ome * c * r)) * sin(th2) - sin(thm);

        if (fth11 * fthm > 0)
        {
            th11 = thm;
        }
        else
        {
            th12 = thm;
        }

        printf("r=%3.f[Ω]のとき、θ1=%.3f[rad]\n", r, th1);
    }
    return (0);
}

// double fth(double th)
// {
//     // return exp(-(pi + th - th2) / (ome * c * r)) * sin(th2) - sin(th);
//     double a = exp(-(pi + th - th2) / (ome * c * r)) * sin(th2) - sin(th);
//     judgment(a);
// };
// double judgment(double exp)
// {
//     while (fabs(th11 - th12) > 0.0001)
//         ;
//     printf("r=%3.f[Ω]のとき、θ1=%.3f[rad]\n", r, th1);
// };