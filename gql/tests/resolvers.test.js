import { DateTime } from "luxon";
import resolvers from "../resolvers";

// Mock the uuidv4 function
jest.mock("uuid", () => ({
  v4: jest.fn(),
}));

describe("calendarForMeeting Resolver", () => {
  it("generates a calendar for a meeting", async () => {
    const mockCurrentDate = DateTime.fromISO("2023-09-25T09:00:00.000-04:00");
    // Mock the DateTime.now function to return the fixed date
    DateTime.now = jest.fn().mockReturnValue(mockCurrentDate);

    // Mock the uuidv4 function to generate fixed IDs
    const mockUuid = "mockUuid";
    jest.spyOn(require("uuid"), "v4").mockReturnValue(mockUuid);

    // Define the arguments and context for your resolver
    const args = {
      meetingId: "mockMeetingId",
    };

    const mockContext = {};

    // Call the resolver function
    const result = await resolvers.Query.calendarForMeeting(
      {},
      args,
      mockContext
    );

    // Expectations
    // To have 3 days in the calendar
    expect(result).toHaveLength(3);
    /// To have 4 times in each day
    expect(result[0].times).toHaveLength(4);
    // Date to be in the future
    expect(result[0].date).toBe("2023-09-26T09:00:00.000-04:00");
    expect(result[1].date).toBe("2023-09-27T09:00:00.000-04:00");
    expect(result[2].date).toBe("2023-09-28T09:00:00.000-04:00");
  });
});
