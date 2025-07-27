import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import ConfusedIcon from "../assets/confused.png"; // Assuming you have an icon
import Swal from "sweetalert2";

export default function Home() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const name = [
    "putri",
    "khulyatin",
    "dyah",
    "saputri",
    "khulyatin dyah saputri",
    "Khulyatin Dyah Saputri",
    "Khulyatin",
    "Dyah",
    "Putri",
    "kuli",
    "kulkul",
    "Kulkul",
    "Kuli",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.includes(input)) {
      Swal.fire({
        title: "Wah jawaban yang tepat!",
        text: `Hi, ${input}!😊❤️ Ini website yang aku buat sendiri tau!`,
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Lanjutkan",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/question-1"); // Ganti dengan rute yang diinginkan
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Kamu bukan putri! Coba lagi dengan nama "putri".`,
      });
    }
    setInput("");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Ini web apa?
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
          Kamu ga tau ini web apa? Kita cari tau yaa, coba isi nama kamu di
          bawah ini!
        </Typography>
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
      </Paper>
    </Container>
  );
}
