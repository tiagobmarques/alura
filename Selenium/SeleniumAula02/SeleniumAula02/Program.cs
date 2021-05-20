using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace SeleniumAula02
{
    class Program
    {
        static void Main(string[] args)
        {
            //System.setPro
            IWebDriver driver = new ChromeDriver();

            driver.Navigate().GoToUrl("https://www8.receita.fazenda.gov.br/SimplesNacional/controleAcesso/Autentica.aspx?id=6");

            IWebElement campoDeTexto = driver.FindElement(By.Name("ctl00$ContentPlaceHolder$txtCNPJ"));

            campoDeTexto.SendKeys("30041938000110");

            //campoDeTexto.Submit();

            //driver.Close();
        }
    }
}
