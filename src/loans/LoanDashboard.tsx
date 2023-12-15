import {
  AccountBalance,
  CreditCard,
  DeleteForeverRounded,
} from "@mui/icons-material";
import { Divider } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import React, { useCallback, useEffect, useState } from "react";
import LoanModal from "./LoanModal";
import {
  type Loan,
  deleteLoan,
  loansLoader,
  calculateMonthlyPayment,
} from "./loan";
import { formatDate } from "../common/date";

export default function LoanDashboard(): JSX.Element {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setLoans(loansLoader.load(loans));
  }, []);

  useEffect(() => {
    loansLoader.save(loans);
  }, [loans]);

  const onDeleteLoan = useCallback(
    (index: number) => {
      setLoans(deleteLoan(loans, index));
    },
    [loans, setLoans],
  );

  return (
    <>
      <Typography level="h2" component="h1">
        Loans
      </Typography>

      <Box>
        <Button
          size="sm"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add new
        </Button>
      </Box>

      <LoanModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        onSubmit={(loan) => {
          setIsModalOpen(false);
          setLoans([...loans, loan]);
        }}
      />

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        <Box>
          <Card variant="soft" color="success" invertedColors>
            <CardContent>
              <Box>
                <AccountBalance />
              </Box>

              <Typography level="body-md">Networth</Typography>
              <Typography level="h2">$ 0</Typography>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Card variant="soft" color="danger" invertedColors>
            <CardContent>
              <Box>
                <AccountBalance />
              </Box>

              <Typography level="body-md">Debt</Typography>
              <Typography level="h2">
                ${" "}
                {new Intl.NumberFormat().format(
                  -loans.reduce((net, acc) => {
                    return net + acc.balance;
                  }, 0),
                )}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        {loans.map((loan, i) => {
          return (
            <Box key={i}>
              <Card variant="soft" color="primary" invertedColors>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    {loan.type === "house" && <AccountBalance />}
                    {loan.type === "car" && <CreditCard />}

                    <IconButton
                      variant="soft"
                      color="danger"
                      size="sm"
                      onClick={() => {
                        onDeleteLoan(i);
                      }}
                    >
                      <DeleteForeverRounded />
                    </IconButton>
                  </Box>
                  <Typography level="body-md">{loan.name}</Typography>
                  <Typography level="h2">
                    $ {new Intl.NumberFormat().format(loan.balance)}
                  </Typography>
                  {loan.apy}%
                  <br /> {formatDate(new Date(loan.maturityDate))}
                  <br /> {loan.termInMonths}
                  <br />${" "}
                  {new Intl.NumberFormat().format(
                    calculateMonthlyPayment(loan),
                  )}
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
