// Required packages
// ===============================================
const app = express();
const PORT = process.env.PORT || 4001

// Middleware functions
// ===============================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Express Call
// ===============================================
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}); a