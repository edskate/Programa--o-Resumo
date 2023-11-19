# Simple Python Program with List and Prices

# Function to display the items and their prices
def display_items(item_list, price_list):
    print("Items available:")
    for i in range(len(item_list)):
        print(f"{i + 1}. {item_list[i]} - ${price_list[i]:.2f}")

# Main program
if __name__ == "__main__":
    # List of items
    items = ["Item A", "Item B", "Item C", "Item D", "Item E"]

    # Corresponding list of prices
    prices = [10.99, 5.49, 7.99, 12.50, 8.75]

    # Display items and prices
    display_items(items, prices)

    # Example: Accessing individual items and prices
    index = 2
    print(f"\nItem selected: {items[index]}")
    print(f"Price: ${prices[index]:.2f}")
