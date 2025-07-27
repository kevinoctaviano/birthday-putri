import { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Paper,
  Box,
  TextField,
} from "@mui/material";
import ConfusedIcon from "../assets/confused.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Pages2() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const name = [
    "kevin",
    "Kevin",
    "kevin octaviano",
    "Kevin Octaviano",
    "kepin",
    "Kepin",
    "Mas Tepin",
    "mas tepin",
    "Mas Kevin",
    "mas kevin",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.includes(input)) {
      Swal.fire({
        title: "Hehehe",
        text: `Ciee dibuatin website sama pacarnya!😊❤️`,
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Lanjutkan",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/final"); // Ganti dengan rute yang diinginkan
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Salaah, coba lagi dengan nama "kevin". Parah bet!`,
      });
    }
    setInput("");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Last Question
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
          Siapa nama pasanganmu?
        </Typography>

        {/* Bungkus dengan form */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Masukkan namamu..."
              variant="outlined"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              sx={{ mb: 3 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Lanjut
            </Button>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}
