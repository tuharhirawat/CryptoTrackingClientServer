
//namespace CryptoTrackingSystemFinal1
//{
//    public class Program
//    {
//        public static void Main(string[] args)
//        {
//            var builder = WebApplication.CreateBuilder(args);

//            // Add services to the container.

//            builder.Services.AddControllers();
//            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//            builder.Services.AddEndpointsApiExplorer();
//            builder.Services.AddSwaggerGen();

//            var app = builder.Build();

//            // Configure the HTTP request pipeline.
//            if (app.Environment.IsDevelopment())
//            {
//                app.UseSwagger();
//                app.UseSwaggerUI();
//            }

//            app.UseAuthorization();


//            app.MapControllers();

//            app.Run();
//        }
//    }
//}




//using Microsoft.EntityFrameworkCore;
//using CryptoTrackingSystemDemo1;
//using CryptoTrackingSystemDemo1.Models;


//namespace CryptoTrackingSystemDemo1
//{
//    public class Program
//    {
//        public static void Main(string[] args)
//        {
//            var builder = CryptoTrackingSystemDemo1.CreateBuilder(args);

//            builder.Services.AddControllers();
//            builder.Services.AddEndpointsApiExplorer();
//            builder.Services.AddSwaggerGen();

//            builder.Services.AddCors(options =>
//            {
//                options.AddPolicy("AllowReactApp", policy =>
//                {
//                    policy.WithOrigins("http://localhost:5173") // React app URL
//                          .AllowAnyHeader()
//                          .AllowAnyMethod()
//                          .AllowCredentials();
//                });
//            });

//            builder.Services.AddDbContext<CryptoTrackingClientServerContext>(options =>
//                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

//            builder.Services.AddScoped<IUserRepository, UserRepository>();

//            var app = builder.Build();

//            if (app.Environment.IsDevelopment())
//            {
//                app.UseSwagger();
//                app.UseSwaggerUI();
//            }


//            app.UseCors("AllowReactApp");
//            app.UseAuthorization();


//            app.MapControllers();

//            app.Run();
//        }
//    }
//}








using Microsoft.EntityFrameworkCore;
using CryptoTrackingSystemFinal1.Models;
using CryptoTrackingSystemFinal1.Repositories;
using CryptoTrackingSystemFinal1;
using CryptoTrackingSystemFinal1.Interfaces;

namespace CryptoTrackingSystemFinal1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowReactApp", policy =>
                {
                    policy.WithOrigins("http://localhost:5173") // React app URL
                          .AllowAnyHeader()
                          .AllowAnyMethod()
                          .AllowCredentials();
                });
            });

            builder.Services.AddDbContext<CryptoTrackingClientServerContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddScoped<IUserRepository, UserRepository>();

            builder.Services.AddScoped<IAirdropRepository, AirdropRepository>();

            builder.Services.AddScoped<IWishlistAirdropRepository, WishlistAirdropRepository>();

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors("AllowReactApp");
            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}


