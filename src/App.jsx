import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/Home";
import Scenario from "./pages/Scenario";
import img1 from "./assets/img/illustrations/1.png";
import img2 from "./assets/img/illustrations/2.png";
import img3 from "./assets/img/illustrations/3.png";
import img4 from "./assets/img/illustrations/4.png";
import img5 from "./assets/img/illustrations/5.png";
import img6 from "./assets/img/illustrations/6.png";
import img7 from "./assets/img/illustrations/7.png";
import img8 from "./assets/img/illustrations/8.png";
import img9 from "./assets/img/illustrations/9.png";
import img10 from "./assets/img/illustrations/10.png";
import img11 from "./assets/img/illustrations/11.png";
import img12 from "./assets/img/illustrations/12.png";
import img13 from "./assets/img/illustrations/13.png";
import img14 from "./assets/img/illustrations/14.png";
import img15 from "./assets/img/illustrations/15.png";
import '@fontsource-variable/plus-jakarta-sans';
import { label } from "framer-motion/client";
export default function App() {
  const data = [
    {
      title: "Young Professional, Single, One Job",
      income: {
        primary: {
          min: 10000,
          max:50000,
          initialValue: 10000,
          label1: "10,000",
          label2: "50,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Standard Deducation",
        secondary: "No Additional withholding",
        image: img2
      }
    },
    {
      title: "Dual-Income No Kids (DINK), Married",
      income: {
        isMultiple: true,
        primary: {
          min: 10000,
          max:70000,
          initialValue: 70000,
          label: "Primary",
          label1: "10,000",
          label2: "70,000/year",
        },
        secondary: {
          min: 10000,
          max:65000,
          initialValue: 10000,
          label: "Spouse",
          label1: "10,000",
          label2: "65,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        primary: 'Withhold at higher single rate to avoid underpayment',
        image: img2
      }
    },
    {
      title: "Single Parent with Two Kids",
      income: {
        primary: {
          min: 10000,
          max:45000,
          initialValue: 10000,
          label1: "10,000",
          label2: "45,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Head of Household",
        image: img14,
      },
      adjustment: {
        label: "Child Tax Credit for two kids",
        image: img3
      },
      outcome: {
        primary: "Lower withholding due to child credits",
        image: img2
      }
    },
    {
      title: "Married, Sole Earner, Three Kids",
      income: {
        primary: {
          min: 10000,
          max:60000,
          initialValue: 10000,
          label1: "10,000",
          label2: "60,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Child Tax Credit for three kids",
        image: img12
      },
      outcome: {
        primary: "Reduced withholding owing to multiple child credits",
        image: img2
      }
    },
    {
      title: "High-Income Single, Multiple Jobs",
      income: {
        isMultiple: true,
        primary: {
          min: 10000,
          max:120000,
          initialValue: 120000,
          label: "Primary",
          label1: "10,000",
          label2: "120,000/year",
        },
        secondary: {
          min: 10000,
          max:30000,
          initialValue: 10000,
          label: "Secondary",
          label1: "10,000",
          label2: "30,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Additional withholding for second job",
        image: img10
      },
      outcome: {
        primary: "Increased withholding to cover tax liability from both jobs",
        image: img2
      }
    },
    {
      title: "Retired Couple, Pension, and Social Security",
      income: {
        primary: {
          min: 10000,
          max:35000,
          initialValue: 35000,
          label1: "10,000",
          label2: "35,000/year",
          label3:"(Pension)"
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Withholding from pension only",
        image: img10
      },
      outcome: {
        primary: "Adjusted to avoid overpaying due to Social Security being partially taxable",
        image: img2
      }
    },
    {
      title: "Freelancer with Variable Income",
      income: {
        primary: {
          min: 10000,
          max:80000,
          initialValue: 80000,
          label1: "10,000",
          label2: "Approx. 80,000/year",
          label3: "(fluctuates)"
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Quarterly estimated tax payments",
        image: img10
      },
      outcome: {
        primary: "Adjustments to avoid underpayment penalties due to variable income",
        image: img2
      }
    },
    {
      title: "Married, Both High Earners, No Kids",
      income: {
        isMultiple: true,
        primary: {
          min: 10000,
          max:150000,
          initialValue: 150000,
          label: "Primary",
          label1: "10,000",
          label2: "150,000/year",
        },
        secondary: {
          min: 10000,
          max:140000,
          initialValue: 140000,
          label: "Spouse",
          label1: "10,000",
          label2: "140,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Additional withholding on higher-earning spouse's income",
        image: img10
      },
      outcome: {
        primary: "Prevent underpayment due to high combined income.",
        image: img2
      }
    },
    {
      title: "Married, One Working, One Unemployed",
      income: {
        primary: {
          min: 10000,
          max:50000,
          initialValue: 50000,
          label1: "10,000",
          label2: "50,000/year",
          label3: "(Working Spouse )"
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Standard withholding",
        secondary: "No additional income to consider",
        image: img2
      }
    },
    {
      title: "Single, High Earner, Investment Income",
      income: {
        primary: {
          min: 10000,
          max:200000,
          initialValue: 200000,
          label1: "10,000",
          label2: "200,000/year, plus",
          label3: "20,000/year in dividends"
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Additional withholding for investment income",
        image: img7
      },
      outcome: {
        primary: "Higher withholding to cover taxes on both salary and investment income",
        image: img2
      }
    },
    {
      title: "College Student Working Part-Time",
      income: {
        primary: {
          min: 10000,
          max:15000,
          initialValue: 10000,
          label1: "10,000",
          label2: "15,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Likely no tax liability",
        secondary: "Minimal or no withholding required",
        image: img2
      }
    },
    {
      title: "Married with Non-Working Spouse, Two Kids",
      income: {
        primary: {
          min: 10000,
          max: 85000,
          initialValue: 10000,
          label1: "10,000",
          label2: "85,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Child Tax Credit for two kids",
        image: img3
      },
      outcome: {
        primary: "Adjusted withholding for family size and child credits.",
        image: img2
      }
    },
    {
      title: "Divorced, Paying Alimony",
      income: {
        isMultiple: true,
        primary: {
          min: 10000,
          max:100000,
          initialValue: 100000,
          label1: "10,000",
          label2: "100,000/year",
        },
        secondary: {
          min: 10000,
          max:15000,
          initialValue: 10000,
          title: "Alimony Payments",
          label1: "10,000",
          label2: "15,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Adjust for alimony payments",
        image: img10
      },
      outcome: {
        primary: "Increased withholding to cover alimony payments",
        image: img2
      }
    },
    {
      title: "Married, Both Part-Time Jobs, One Child",
      income: {
        isMultiple: true,
        primary: {
          min: 10000,
          max: 25000,
          initialValue: 25000,
          label: "Primary",
          label1: "10,000",
          label2: "25,000/year",
        },
        secondary: {
          min: 10000,
          max: 20000,
          initialValue: 20000,
          label: "Spouse",
          label1: "10,000",
          label2: "20,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Child Tax Credit for one child",
        image: img11
      },
      outcome: {
        primary: "Lower withholding due to lower combined income and child credit",
        image: img2
      }
    },
    {
      title: "Widowed Senior with Fixed Income",
      income: {
        primary: {
          min: 10000,
          max: 35000,
          initialValue: 35000,
          label1: "10,000",
          label2: "35,000/year",
          label3: "(Pension and Social Security)"
        },
        image: img4,
      },
      filing: {
        label: "Widower",
        image: img6,
      },
      adjustment: {
        label: "Minimal withholding from pension",
        image: img8
      },
      outcome: {
        primary: "Adjusted to account for non-taxable portion of Social Security",
        image: img2
      }
    },
    {
      title: "Young Couple, Newly Married",
      income: {
        primary: {
          min: 10000,
          max: 40000,
          initialValue: 10000,
          label1: "10,000",
          label2: "40,000/year",
          label3: "(Each)"
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Standard deduction",
        secondary: "Typical withholding",
        image: img2
      }
    },
    {
      title: "Single, Owning Rental Properties",
      income: {
        primary: {
          min: 10000,
          max:90000,
          initialValue: 10000,
          label1: "10,000",
          label2: "90,000/year",
          label3: "plus $24,000/year rental income"
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Additional withholding for rental income",
        image: img15
      },
      outcome: {
        primary: 'Increased withholding to cover tax liability from rental income',
        image: img2
      }
    },
    {
      title: "Married, One Spouse Self-Employed",
      income: {
        isMultiple: true,
        primary: {
          min: 10000,
          max: 70000,
          initialValue: 10000,
          label1: "10,000",
          label2: "10,000/year",
          label3: "(Employed Spouse)"
        },
        secondary: {
          min: 10000,
          max: 50000,
          initialValue: 10000,
          label1: "10,000",
          label2: "50,000/year",
          label3: "(Self-Employed)"
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Quarterly estimated tax payments for self-employed spouse",
        image: img5
      },
      outcome: {
        primary: "Combination of withholding and estimated payments to cover total tax liability",
        image: img2
      }
    },
    {
      title: "Immigrant on Work Visa, Single",
      income: {
        primary: {
          min: 10000,
          max: 65000,
          initialValue: 10000,
          label1: "10,000",
          label2: "65,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Single",
        label1: "Non-Resident Alien",
        image: img1,
      },
      adjustment: {
        label: "Specific non-resident withholding rates",
        image: img10
      },
      outcome: {
        primary: "Adjusted for non-resident tax status",
        image: img2
      }
    },
    {
      title: "Young Professional, Paying Student Loans",
      income: {
        primary: {
          min: 10000,
          max: 55000,
          initialValue: 10000,
          label1: "10,000",
          label2: "55,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Consideration for student loan interest deduction",
        image: img9
      },
      outcome: {
        primary: "Slight adjustment to withholding to account for deductible student loan interest",
        image: img2
      }
    },
    {
      title: "Recent College Graduate, First Job",
      income: {
        primary: {
          min: 10000,
          max: 45000,
          initialValue: 10000,
          label1: "10,000",
          label2: "45,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Standard single withholding",
        secondary: "No adjustments",
        third: "Ideal for a simple tax situationding",
        image: img2
      }
    },
    {
      title: "Married Couple, Dual Income, No Kids",
      income: {
        isMultiple: true,
        primary: {
          min: 10000,
          max: 60000,
          initialValue: 10000,
          label: "Primary",
          label1: "10,000",
          label2: "60,000/year",
        },
        secondary: {
          min: 10000,
          max: 55000,
          initialValue: 10000,
          label: "Secondary",
          label1: "10,000",
          label2: "55,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "None",
        image: img10
      },
      outcome: {
        primary: "Standard withholding for a dual-income married couple without dependents",
        image: img2
      }
    },
    {
      title: "Single Parent with Two Children",
      income: {
        primary: {
          min: 10000,
          max: 50000,
          initialValue: 10000,
          label1: "10,000",
          label2: "50,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Head of Household",
        image: img14,
      },
      adjustment: {
        label: "Claiming two child tax credits",
        image: img3
      },
      outcome: {
        isMultiple: true,
        primary: "Reduced withholding due to child tax credits",
        secondary: "Benefitting from head of household status",
        image: img2
      }
    },
    {
      title: "High-Income Single Professional",
      income: {
        primary: {
          min: 10000,
          max: 120000,
          initialValue: 120000,
          label1: "10,000",
          label2: "120,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Additional withholding to cover potential higher tax bracket",
        image: img10
      },
      outcome: {
        primary: "Higher withholding to avoid underpayment due to being in a higher tax bracket",
        image: img2
      }
    },
    {
      title: "Retired Couple with Pension and Social Security",
      income: {
        primary: {
          min: 10000,
          max: 50000,
          initialValue: 10000,
          label1: "10,000",
          label2: "50,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Adjusting for Social Security being partially taxable",
        image: img10
      },
      outcome: {
        primary: "Withholding from pension to cover taxes, considering non-taxable portion of Social Security",
        image: img2
      }
    },
    {
      title: "Newly Married Couple, Combining Finances",
      income: {
        primary: {
          min: 10000,
          max: 70000,
          initialValue: 70000,
          label1: "10,000",
          label2: "70,000/year",
          label3: "(combined)"
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Adjusting to joint income and tax brackets",
        image: img10
      },
      outcome: {
        primary: "Reevaluation of withholding due to marriage and combined income",
        image: img2
      }
    },
    {
      title: "Single, Freelance Graphic Designer",
      income: {
        primary: {
          min: 10000,
          max: 60000,
          initialValue: 60000,
          label1: "10,000",
          label2: "60,000/year",
          label3: "Varies, approx"
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Quarterly estimated tax payments due to variable income",
        image: img10
      },
      outcome: {
        primary: "Estimated payments calculated based on variable income to avoid underpayment penalties",
        image: img2
      }
    },
    {
      title: "Married with One Spouse in School, One Working",
      income: {
        primary: {
          min: 10000,
          max: 35000,
          initialValue: 35000,
          label1: "10,000",
          label2: "35,000/year",
          label3: "(working spouse)"
        },
        image: img4,
      },
      filing: {
        label: "Married Filing Jointly",
        image: img13,
      },
      adjustment: {
        label: "Potential education credits",
        image: img9
      },
      outcome: {
        primary: "Lower withholding considering education tax benefits",
        image: img2
      }
    },
    {
      title: "Divorced, Paying Alimony, Two Kids",
      income: {
        isMultiple: true,
        primary: {
          min: 10000,
          max: 85000,
          initialValue: 10000,
          label1: "10,000",
          label2: "85,000/year",
        },
        secondary: {
          min: 100,
          max: 1200,
          initialValue: 100,
          title: "Alimony Paid",
          label1: "100",
          label2: "1200/month",
        },
        image: img4,
      },
      filing: {
        label: "Head of Household",
        image: img13,
      },
      adjustment: {
        label: "Adjusting for alimony payments",
        label1: "Claiming child tax credits",
        image: img10
      },
      outcome: {
        isMultiple: true,
        primary: "Increased withholding for alimony",
        secondary: "Offset by child tax credits",
        image: img2
      }
    },
    {
      title: "Mid-Career Professional, Maximizing Retirement Savings",
      income: {
        primary: {
          min: 10000,
          max: 100000,
          initialValue: 100000,
          label1: "10,000",
          label2: "100,000/year",
        },
        image: img4,
      },
      filing: {
        label: "Single",
        image: img1,
      },
      adjustment: {
        label: "Maximizing 401(k) contributions",
        image: img10
      },
      outcome: {
        primary: "Adjust withholding considering reduced taxable income due to 401(k) contributions",
        image: img2
      }
    },
  ]

  return (
    <div className="text-primary" style={{ fontFamily: 'Plus Jakarta Sans Variable, sans-serif' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {data.map((item, index) => (
          <Route 
            key={index} 
            path={`/scenario${index + 1}`} 
            element={
              <Scenario 
                id={index + 1} 
                title={item.title} 
                income={item.income} 
                filing={item.filing} 
                adjustment={item.adjustment} 
                outcome={item.outcome} 
              />
             } 
          />
        ))}
      </Routes>
    </div>
  )
}