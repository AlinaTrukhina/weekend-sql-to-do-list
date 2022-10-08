DROP TABLE IF EXISTS "todolist";

CREATE TABLE "todolist" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR,
	"complete" BOOLEAN DEFAULT FALSE);
	
	
INSERT INTO "todolist" 
		("task", "complete")
VALUES ('wash dishes', FALSE),
		('sweep floor', FALSE),
		('laundry', FALSE);
