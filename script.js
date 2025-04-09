/* Reset some default styling */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

/* Header Section */
header {
  background-color: #0077cc;
  color: white;
  padding: 40px 20px;
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 2.5em;
}

header p {
  font-size: 1.2em;
  margin-top: 10px;
}

/* Sections */
section {
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
  border-bottom: 1px solid #ddd;
}

section h2 {
  font-size: 1.8em;
  color: #0077cc;
  margin-bottom: 20px;
}

/* Resume List */
#resume ul {
  list-style: none;
  padding: 0;
}

#resume li {
  margin-bottom: 10px;
}

/* Portfolio Gallery */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gallery img,
.gallery video {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Contact */
#contact a {
  color: #0077cc;
  text-decoration: none;
}

#contact a:hover {
  text-decoration: underline;
}
body {
  font-family: 'Inter', sans-serif;
}