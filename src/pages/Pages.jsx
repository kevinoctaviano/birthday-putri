import { useState } from "react";
import { Button, Container, Typography, Paper, Box } from "@mui/material";
import ConfusedIcon from "../assets/confused.png";
import Swal from "sweetalert2";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";

export default function Pages() {
  const [value, setValue] = useState(dayjs());
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gunakan dayjs untuk format
    const selectedDate = value.format("DD MMMM YYYY");
    const birthday = dayjs(value);
    const today = dayjs();

    const age = today.diff(birthday, "year");

    if (selectedDate === "03 August 1999") {
      Swal.fire({
        title: "Betul sekali! Ciee tambah tua😁🤣😘",
        text: `Hi, Putri! Selamat bertambahnya usia yang ke-${age}😊❤️`,
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Lanjutkan",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/question-2"); // Ganti dengan rute yang diinginkan
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Bukan tanggal lahir putri! Coba lagi.`,
      });
    }
  };

  const handleDelete = () => {
    setValue(dayjs());
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Hmm...
        </Typography>
        <Box
          sx={{
            mb: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" sx={{ color: "red" }} gutterBottom>
            ?
          </Typography>
          <img
            src={ConfusedIcon}
            alt="Icon"
            style={{
              width: 100,
              height: 150,
            }}
          />
        </Box>
        <Typography variant="body1" align="center" gutterBottom>
          Beneran ini putri? Coba masukin tanggal lahirmu!
        </Typography>

        {/* Bungkus dengan form */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={handleSubmit}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                format="DD-MM-YYYY"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider>

            <Box textAlign="center" mt={2} sx={{ display: "grid", gap: 2 }}>
              <Button type="submit" variant="contained" color="success">
                OK
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDelete}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}
