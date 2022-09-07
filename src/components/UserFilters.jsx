import React, { useState, useEffect } from "react";
import { Card, Box, Typography, TextField, Stack } from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";
import UserCard from "./UserCard";
import UserList from "../data/users.json";
const UserFilters = () => {
  const [search, setSearch] = useState("");
  const [afterSearch, setAfterSearch] = useState(UserList);

  useEffect(() => {
    const doUpdate = () => {
      const newList = UserList.filter(
        (user) =>
          user.first_name.toLowerCase().includes(search) ||
          user.last_name.toLowerCase().includes(search)
      );
      setAfterSearch(newList);
      console.log(afterSearch);
    };
    doUpdate();
  }, [search]);

  return (
    <div>
      <Card
        sx={{
          height: "550px",
          width: "410px",
          m: "22px auto",
          borderRadius: "10px",
          boxShadow: "10px 10px 10px #ccc",
          "&:hover": {
            boxShadow: "20px 20px 20px #ccc",
          },
        }}
      >
        <Box sx={{ backgroundColor: "#3e57db", minHeight: "150px", top: 0 }}>
          <Typography
            variant="h4"
            pt={2}
            sx={{ color: "white", fontWeight: "bold" }}
          >
            User Filter
          </Typography>
          <Typography
            variant="body1"
            pt={1}
            pb={1}
            sx={{ color: "white", fontWeight: "bold", opacity: "0.9" }}
          >
            Search User By Name
          </Typography>
          <TextField
            variant="filled"
            size="small"
            placeholder="Search..."
            sx={{
              backgroundColor: "white",
              minWidth: "70%",
              input: { color: "black", fontSize: "16px", p:"12px 14px", },
              ":: placeholder": {},
              opacity: "0.9",
             
              mt: "15px 0px 10px 0px",
              borderRadius: 2,
            }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Box>
        <Box mt={1} sx={{ overflowY: "scroll", height: "400px" }}>
          <Stack gap={1} justifyContent="center" alignItems="center">
            {afterSearch.map((userDetail) => (
              <UserCard details={userDetail} />
            ))}
          </Stack>
        </Box>
      </Card>
    </div>
  );
};

export default UserFilters;
