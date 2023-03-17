import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const BasicCard = (props: any) => {
    const { id, userId, title, body } = props;

    return (
        <Card sx={{ minWidth: 100 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {`No.${id}`} - {`User ID: ${userId}`}
                </Typography>

                <Typography variant="h5" component="div">
                    {title}
                </Typography>

                <Typography variant="body2">
                    {body}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BasicCard;
