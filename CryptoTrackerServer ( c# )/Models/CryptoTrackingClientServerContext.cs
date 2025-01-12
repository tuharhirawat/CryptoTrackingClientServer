using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CryptoTrackingSystemFinal1.Models
{
    public partial class CryptoTrackingClientServerContext : DbContext
    {
        public CryptoTrackingClientServerContext()
        {
        }

        public CryptoTrackingClientServerContext(DbContextOptions<CryptoTrackingClientServerContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Airdrop> Airdrops { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<WishlistAirdrop> WishlistAirdrops { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-GA5SAER;Database=CryptoTrackingClientServer;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Airdrop>(entity =>
            {
                entity.ToTable("Airdrop");

                entity.HasIndex(e => e.AirdropName, "UQ__Airdrop__F6D35E0B8DF4982F")
                    .IsUnique();

                entity.Property(e => e.AirdropName).HasMaxLength(255);

                entity.Property(e => e.AirdropStatus).HasMaxLength(15);

                entity.Property(e => e.FundRaised).HasMaxLength(50);

                entity.Property(e => e.ReferralProgram).HasMaxLength(10);

                entity.Property(e => e.SocialMediaRequirement).HasMaxLength(10);

                entity.Property(e => e.TokenSymbol).HasMaxLength(50);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.MobileNumber, "UQ__users__30462B0F9BC56DAB")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "UQ__users__AB6E616423B83EB9")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.MobileNumber)
                    .HasMaxLength(15)
                    .HasColumnName("mobile_number");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.Username)
                    .HasMaxLength(255)
                    .HasColumnName("username");
            });

            modelBuilder.Entity<WishlistAirdrop>(entity =>
            {
                entity.HasKey(e => e.WishlistId)
                    .HasName("PK__Wishlist__233189CB5C92969D");

                entity.Property(e => e.WishlistId).HasColumnName("WishlistID");

                entity.Property(e => e.AirdropId).HasColumnName("AirdropID");

                entity.Property(e => e.AirdropName).HasMaxLength(255);

                entity.Property(e => e.UserId).HasColumnName("UserID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
