CREATE SCHEMA IF NOT EXISTS custody;

CREATE TABLE IF NOT EXISTS custody.test_table (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE PROCEDURE custody.test_insert(p_name TEXT)
LANGUAGE SQL
AS $$
    INSERT INTO custody.test_table (name) VALUES (p_name);
$$;