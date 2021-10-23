#include <stdio.h>
#include <math.h>
/*変数を定義*/
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
    double omg, c, sgm, y, a11, a12, am, a2;

    pi = 3.141592;
    omg = 100 * pi;
    c = 0.00068;
    r = 40;

    while (r <= 140)
    {
        a11 = 0.0;
        a2 = pi - atan(omg * c * r);
        a12 = a2;
        y = exp(-(pi + a11 - a2) / (omg * c * r)) * sin(a2) - sin(a11);
        sgm = 0.0001;
        do
        {
            am = (a11 + a12) / 2.0;
            if (y * (exp(-(pi + am - a2) / (omg * c * r)) * sin(a2) - sin(am)) > 0)
            {
                a11 = am;
            }
            else
            {
                a12 = am;
            }
        } while (fabs(a11 - a12) > sgm);
        {
            printf("抵抗r=%3.f[Ω]のとき、θ1=%.3f[rad]、θ2=%.3f[rad]\n", r, am, a2);
            r += 10;
        }
    }
    return (0);
}