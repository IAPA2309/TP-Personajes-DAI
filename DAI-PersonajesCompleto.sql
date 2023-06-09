USE [master]
GO
/****** Object:  Database [DAI-Personajes]    Script Date: 16/6/2023 09:30:20 ******/
CREATE DATABASE [DAI-Personajes]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DAI-Personajes', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI-Personajes.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DAI-Personajes_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI-Personajes_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [DAI-Personajes] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DAI-Personajes].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DAI-Personajes] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DAI-Personajes] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DAI-Personajes] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DAI-Personajes] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DAI-Personajes] SET ARITHABORT OFF 
GO
ALTER DATABASE [DAI-Personajes] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DAI-Personajes] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DAI-Personajes] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DAI-Personajes] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DAI-Personajes] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DAI-Personajes] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DAI-Personajes] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DAI-Personajes] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DAI-Personajes] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DAI-Personajes] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DAI-Personajes] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DAI-Personajes] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DAI-Personajes] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DAI-Personajes] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DAI-Personajes] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DAI-Personajes] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DAI-Personajes] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DAI-Personajes] SET RECOVERY FULL 
GO
ALTER DATABASE [DAI-Personajes] SET  MULTI_USER 
GO
ALTER DATABASE [DAI-Personajes] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DAI-Personajes] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DAI-Personajes] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DAI-Personajes] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DAI-Personajes] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'DAI-Personajes', N'ON'
GO
ALTER DATABASE [DAI-Personajes] SET QUERY_STORE = OFF
GO
USE [DAI-Personajes]
GO
/****** Object:  User [Personajes]    Script Date: 16/6/2023 09:30:20 ******/
CREATE USER [Personajes] FOR LOGIN [Personajes] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 16/6/2023 09:30:20 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Personajes]
GO
/****** Object:  Table [dbo].[Peliculas]    Script Date: 16/6/2023 09:30:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Peliculas](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagen] [varchar](50) NULL,
	[titulo] [varchar](50) NULL,
	[fechaCreacion] [date] NULL,
	[calificacion] [int] NULL,
 CONSTRAINT [PK_Peliculas] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personajes]    Script Date: 16/6/2023 09:30:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personajes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagen] [varchar](150) NULL,
	[nombre] [varchar](50) NULL,
	[edad] [int] NULL,
	[peso] [float] NULL,
	[historia] [varchar](max) NULL,
	[peliculas] [int] NULL,
 CONSTRAINT [PK_Personajes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Peliculas] ON 

INSERT [dbo].[Peliculas] ([id], [imagen], [titulo], [fechaCreacion], [calificacion]) VALUES (1, N'toystoryP.png', N'Toy Story', CAST(N'1995-11-22' AS Date), 5)
INSERT [dbo].[Peliculas] ([id], [imagen], [titulo], [fechaCreacion], [calificacion]) VALUES (3, N'mulanP.png', N'Mulan', CAST(N'1998-06-05' AS Date), 4)
INSERT [dbo].[Peliculas] ([id], [imagen], [titulo], [fechaCreacion], [calificacion]) VALUES (4, N'ralphP.png', N'Wreck it Ralph', CAST(N'2013-01-03' AS Date), 4)
INSERT [dbo].[Peliculas] ([id], [imagen], [titulo], [fechaCreacion], [calificacion]) VALUES (5, N'tarzan.png', N'Tarzan', CAST(N'1999-07-08' AS Date), 3)
SET IDENTITY_INSERT [dbo].[Peliculas] OFF
GO
SET IDENTITY_INSERT [dbo].[Personajes] ON 

INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia], [peliculas]) VALUES (1, N'woody.png', N'Woody', 40, 1, N'Woody es un vaquero de juguete con una cuerda en la parte de atrás, que al tirar de ella dice frases tales como: "Hay una serpiente en mi bota" o "Alguien ha envenenado el abrevadero". Woody es el juguete preferido de Andy, hasta que le regalan a Buzz Lightyear, por el cual deja de lado a Woody. Finalmente, ambos juguetes acaban siendo grandes compañeros. En la primera parte Woody sufre muchos ataques de nervios y es más cobarde; pero en la segunda se ve que más o menos supera estos ataques y se vuelve más valiente. Su novia es Bo Peep, la pastorcita, su mejor amigo es Buzz, y su mejor amiga es Jessie.', 1)
INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia], [peliculas]) VALUES (2, N'tarzan.png', N'Tarzan', 23, 80, N'Tarzán comienza como un bebé que escapa con sus padres biológicos de un barco en llamas que se incendió a causa de un rayo que cayó en medio de una tempestad. Tarzán y sus padres fueron los únicos que se salvaron.', 5)
INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia], [peliculas]) VALUES (3, N'mulan.png', N'Mulan', 20, 55, N'Es una joven muchacha china que se alista en el ejército en lugar de su padre disfrazada de chico para la lucha contra los Hunos, ya que se preocupa de su padre. Mushu, un dragón que dice ser enviado por sus antepasados, le ayuda a adaptarse y a que le vaya todo bien. También lleva con ella a un pequeño Grillo de la Suerte regalado por su abuela. En el ejército se hace llamar "Ping", y consigue ser el guerrero más querido del Capitán Shang, y se hace buena amiga de los guerreros Yao, Ling y Chien Po. Al final, ella resulta ser el mayor rival al que se enfrenta Shan Yu, el líder de los Hunos.', 3)
INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia], [peliculas]) VALUES (4, N'buzz.png', N'Buzz Lightyear', 5, 2, N'Buzz es un juguete con forma de guerrero espacial, el cual llega hasta las manos de Andy, un niño con una gran colección de juguetes. En casa de Andy conocerá al resto de juguetes como son Woody, el Sr. Patata o Rex, entre otros. En las películas, los juguetes Buzz Lightyear cuentan con su propia serie de dibujos, en la cual Buzz vela por la seguridad del universo. Su enemigo es el Emperador Zurg. Al principio el creía que era el verdadero Buzz Lightyear, pero gracias a su mejor amigo Woody, sacó este pensamiento erróneo y adoptó el pensamiento de un juguete. Está enamorado de Jessie.', 1)
INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia], [peliculas]) VALUES (5, N'ralph.png', N'Ralph el demoledor', 34, 120, N'Ralph es un tipo duro que se dedica a romper todo lo que pilla con sus manazas. Pero también tiene un corazoncito. Todos los días durante 30 años, ha hecho su trabajo de "Tipo Malo" en el juego de arcade Repara-Félix Jr. Pero cada vez le gusta menos su trabajo porque nadie valora lo que hace. Ralph está cansado de ser el Tipo Malo oficial y le gustaría que reconocieran su trabajo. Así que se embarca en una aventura salvaje por el increíble universo de los juegos de arcade. Quiere demostrar que ser el tipo malo no quiere decir que sea un mal tipo.', 4)
SET IDENTITY_INSERT [dbo].[Personajes] OFF
GO
USE [master]
GO
ALTER DATABASE [DAI-Personajes] SET  READ_WRITE 
GO
