// /*ヘッダーファイルの読み込み*/
// #include <stdio.h>
// #include <math.h>
// /*変数を定義*/
// double pi;
// double r;
// double theta1;
// double theta2;
// double theta11;
// double theta12;
// double thetam;
// double ft11;
// double ftm;
// /*main関数*/
// int main(void)
// {
//     for (r = 140; 40 <= r; r -= 10)
//     {
//         pi = (atan(1) * 4);
//         printf("%lf\n", pi);
//         theta2 = pi - atan(2 * pi * 50 * 0.00068 * r);
//         printf("%lf\n", theta2);
//         theta11 = 0;
//         theta12 = theta2;
//         thetam = (theta11 + theta12) / 2;
//         printf("%lf\n", thetam);
//         ft11 = exp(-(pi + theta11 - theta2) / (2.0 * pi * 50 * 0.00068 * r)) * sin(theta2) - sin(theta11);
//         printf("%lf\n", ft11);
//         printf("------\n");
//         ftm = exp(-(pi + thetam - theta2) / (2.0 * pi * 50 * 0.00068 * r)) * sin(theta2) - sin(thetam);
//         printf("%lf\n", ftm);
//         }
//     return (0);
// }
/*ヘッダーファイルの読み込み*/
#include <stdio.h>
#include <math.h>
/*変数を定義*/
// double pi(void);
/*main関数*/
int main(void)
{
    double pi;
    double r;
    double theta1;
    double theta2;
    double theta11;
    double theta12;
    double thetam;
    double ft11;
    double ftm;

    /*rを140から40まで10ずつ繰り返し減少させる*/
    for (r = 140; 40 <= r; r -= 10)
    {
        pi = (atan(1) * 4);
        // printf("%lf", pi);
        /*初期値の設定*/
        theta2 = pi - atan(2 * pi * 50 * 0.00068 * r);
        theta11 = 0;
        theta12 = theta2;
        thetam = (theta11 + theta12) / 2;
        ft11 = exp(-(pi + theta11 - theta2) / (2.0 * pi * 50 * 0.00068 * r)) * sin(theta2) - sin(theta11);
        ftm = exp(-(pi + thetam - theta2) / (2.0 * pi * 50 * 0.00068 * r)) * sin(theta2) - sin(thetam);
        /*(θ11-θ12)が±0.001未満になるまで繰り返す*/
        while (fabs(theta11 - theta12) > 0.0001)
        {
            /*f(θ11)・f(θm)>0の正負を判別する*/
            if (ft11 * ftm > 0)
            {
                /*正ならば、θ11=θm*/
                theta11 = thetam;
            }
            else
            {
                /*偽ならば、θ12=θm*/
                theta12 = thetam;
                // theta1 = thetam;
            }
            /*θ1にθmを代入*/
        }
        /*計算結果を表示*/
        printf("r=%3.f[Ω]のとき、θ1=%.3f[rad]\n", r, theta1);
    }
    return (0);
}