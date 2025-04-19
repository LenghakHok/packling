CREATE TABLE "stuffs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"trip_id" uuid NOT NULL,
	"label" varchar(255) NOT NULL,
	"description" varchar(512),
	"duration" integer NOT NULL,
	"is_packed" boolean DEFAULT false,
	"status" varchar(128) DEFAULT 'draft',
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "trip" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(512),
	"icon" varchar(64),
	"duration" integer NOT NULL,
	"left_at" timestamp with time zone DEFAULT now(),
	"returned_at" timestamp with time zone,
	"status" varchar(128) DEFAULT 'draft',
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
